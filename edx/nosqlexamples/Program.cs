using System;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace nosqlexamples
{
    class Program
    {
        static void Main(string[] args)
        {
            GetStorageData().Wait();
        }

        public static async Task GetStorageData() 
        {
            var account = CloudStorageAccount.Parse("");

            var client = account.CreateCloudTableClient();

            var table = client.GetTableReference("people");

            await table.CreateIfNotExistsAsync();

            // var person = new PersonEntity("Smith", "Kati") {
            //     Age = 31,
            //     Hometown = "Berlin"
            // };

            // var operation = TableOperation.Insert(person);

            // await table.ExecuteAsync(operation);

            var condition = TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "Smith");
            var query = new TableQuery<PersonEntity>().Where(condition);

            TableContinuationToken token = null;
            do {
                var segment = await table.ExecuteQuerySegmentedAsync(query, token);
                token = segment.ContinuationToken;
                foreach (var entity in segment) 
                {
                    Console.WriteLine($"{entity.RowKey} {entity.PartitionKey} [Age: {entity.Age} | IsRetired: {entity.IsRetired} | Hometown: {entity.Hometown}]");
                }

            }
            while (token != null);
        }
    }
    public class PersonEntity : TableEntity
    {
        public PersonEntity(string lastName, string firstName)
        {
            this.PartitionKey = lastName;
            this.RowKey = firstName;
        }
        
        public PersonEntity() { }
    
        public int Age { get; set; }
    
        public bool? IsRetired { get; set; }
    
        public string Hometown { get; set; }
    }
}

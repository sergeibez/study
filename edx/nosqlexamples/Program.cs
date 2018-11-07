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
        }
    }
}

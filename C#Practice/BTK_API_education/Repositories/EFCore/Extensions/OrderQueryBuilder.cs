using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.EFCore.Extensions
{
    public static class OrderQueryBuilder
    {
        public static string CreateOrderQuery<T>(string orderByQueryString)
        {
            // title, price desc, word asc
            var orderParams = orderByQueryString.Trim().Split(',');

            // Get the public properties of the Book class
            var propertyInfos = typeof(T)
                .GetProperties(BindingFlags.Public | BindingFlags.Instance);

            var orderQueryBuilder = new StringBuilder();
            foreach (var param in orderParams) // title, price desc, word asc
            {
                if (string.IsNullOrWhiteSpace(param))
                    continue;

                var propertyFromQueryName = param.Trim().Split(" ")[0]; // title, price, word

                // title, price, null
                var objectProperty = propertyInfos
                    .FirstOrDefault(pi => pi.Name.Equals(propertyFromQueryName, StringComparison.InvariantCultureIgnoreCase));

                if (objectProperty == null)
                    continue;

                var direction = param.EndsWith(" desc") ? "descending" : "ascending";

                orderQueryBuilder.Append($"{objectProperty.Name.ToString()} {direction}, ");
            } // title ascending, price descending, 

            var orderQuery = orderQueryBuilder.ToString().TrimEnd(',', ' '); // title ascending, price descending

            return orderQuery;
        }
    }
}
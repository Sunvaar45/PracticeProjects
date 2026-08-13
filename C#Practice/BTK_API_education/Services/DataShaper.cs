using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Services.Contracts;

namespace Services
{
    public class DataShaper<T> : IDataShaper<T> where T : class
    {
        public PropertyInfo[] PropertyInfos { get; set; }
        public DataShaper()
        {   // id, title, price
            PropertyInfos = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);
        }

        public IEnumerable<ExpandoObject> ShapeData(IEnumerable<T> entities, string? fieldsString)
        {
            throw new NotImplementedException();
        }

        public ExpandoObject ShapeData(T entity, string? fieldsString)
        {
            throw new NotImplementedException();
        }

        private IEnumerable<PropertyInfo> GetRequiredProperties(string? fieldsString)
        {
            var requiredProperties = new List<PropertyInfo>();

            if (string.IsNullOrWhiteSpace(fieldsString))
            {
                requiredProperties = PropertyInfos.ToList();
            }
            else
            {
                var fields = fieldsString.Split(',', StringSplitOptions.RemoveEmptyEntries);

                foreach (var field in fields)
                {
                    var property = PropertyInfos
                        .FirstOrDefault(pi => pi.Name.Equals(field.Trim(), StringComparison.InvariantCultureIgnoreCase));

                    if (property == null)
                        continue;

                    requiredProperties.Add(property);
                }
            }

            return requiredProperties;
        }
    }
}
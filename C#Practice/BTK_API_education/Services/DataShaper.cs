using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Entities.Models;
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

        public IEnumerable<ShapedEntity> ShapeData(IEnumerable<T> entities, string? fieldsString)
        {
            var requiredProperties = GetRequiredProperties(fieldsString);

            return FetchDataForList(entities, requiredProperties);
        }

        public ShapedEntity ShapeData(T entity, string? fieldsString)
        {
            var requiredProperties = GetRequiredProperties(fieldsString);
            
            return FetchDataForEntity(entity, requiredProperties);
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
    
        private ShapedEntity FetchDataForEntity(T entity, IEnumerable<PropertyInfo> requiredProperties)
        {
            var shapedObject = new ShapedEntity();

            foreach (var property in requiredProperties)
            {
                var propertyValue = property.GetValue(entity);
                shapedObject.Entity[property.Name] = propertyValue!; // title = "dune" , id = 1
            }

            var objectProperty = entity.GetType().GetProperty("Id");
            if (objectProperty != null)
            {
                var propertyValue = objectProperty.GetValue(entity);
                shapedObject.Id = (int)propertyValue!;
            }

            return shapedObject;
        }

        private IEnumerable<ShapedEntity> FetchDataForList(IEnumerable<T> entities, 
            IEnumerable<PropertyInfo> requiredProperties)
        {
            var shapedData = new List<ShapedEntity>();

            foreach (var entity in entities)
            {
                var shapedObject = FetchDataForEntity(entity, requiredProperties);
                shapedData.Add(shapedObject);
            }

            return shapedData;
        }
    }
}
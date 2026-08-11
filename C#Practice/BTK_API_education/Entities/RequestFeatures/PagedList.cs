using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.RequestFeatures
{
    public class PagedList<T> : List<T>
    {
        public MetaData MetaData { get; set; }
        
        // object with items and page information
        public PagedList(List<T> items, int count, int pageNumber, int pageSize)
        {
            MetaData = new MetaData()
            {
                CurrentPage = pageNumber,
                TotalPages = (int)Math.Ceiling((double)count / pageSize),
                PageSize = pageSize,
                TotalCount = count,
            };
            AddRange(items);
        }
    }
}
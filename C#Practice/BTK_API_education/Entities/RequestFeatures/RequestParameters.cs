using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.RequestFeatures
{
    public abstract class RequestParameters
    {
        const int maxPageSize = 50;

        // Auto-implemented property
        public int PageNumber { get; set; }
        
        // Full-property
        private int _pageSize;
        public int PageSize
        {
            get { return _pageSize; }
            set
            {
                if (value > maxPageSize)
                {
                    _pageSize = maxPageSize;
                }
                else
                {
                    _pageSize = value;
                }
            }
        }

        public string? SearchTerm { get; set; }

        public string? OrderBy { get; set; }
    }
}
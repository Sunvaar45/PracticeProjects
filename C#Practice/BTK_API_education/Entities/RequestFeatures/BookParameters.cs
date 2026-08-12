using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Constants;

namespace Entities.RequestFeatures
{
    public class BookParameters : RequestParameters
    {
        public uint MinPrice { get; set; } = BookConstants.MinPrice;
        public uint MaxPrice { get; set; } = BookConstants.MaxPrice;
        public bool ValidPriceRange => MaxPrice > MinPrice;
    }
}
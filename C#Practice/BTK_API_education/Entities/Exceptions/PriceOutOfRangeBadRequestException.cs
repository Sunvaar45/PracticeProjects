using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Constants;

namespace Entities.Exceptions
{
    public class PriceOutOfRangeBadRequestException : BadRequestException
    {
        public PriceOutOfRangeBadRequestException() : 
            base($"Max price should be less than {BookConstants.MaxPrice} and min price should be more than {BookConstants.MinPrice}.")
        {
        }
    }
}
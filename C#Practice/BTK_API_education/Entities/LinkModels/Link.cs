using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.LinkModels
{
    public class Link
    {
        public string? Href { get; set; } // Hypertext Reference: The URL or URI that the link points to.
        public string? Rel { get; set; } // Relationship: Describes the relationship between the current resource and the linked resource. Common values include "self", "next", "prev", etc.
        public string? Method { get; set; } // HTTP Method: Specifies the HTTP method (GET, POST, PUT, DELETE, etc.) that should be used when accessing the linked resource.
    
        public Link()
        {
            
        }

        public Link(string? href, string? rel, string? method)
        {
            Href = href;
            Rel = rel;
            Method = method;
        }
    }
}
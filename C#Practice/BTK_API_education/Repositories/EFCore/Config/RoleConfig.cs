using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repositories.EFCore.Config
{
    public class RoleConfig : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
                new IdentityRole
                {
                    Id = "cadee4c9-14eb-4370-9c09-0f730e77cfee",
                    Name = "Admin",
                    NormalizedName = "ADMIN",
                    ConcurrencyStamp = "d92997ad-9c79-41d4-a9a9-28e6c7dee1ec"
                },
                new IdentityRole
                {
                    Id = "66bf4077-c8fd-4aca-a084-22f3c57ce281",
                    Name = "User",
                    NormalizedName = "USER",
                    ConcurrencyStamp = "6c020ea2-d1e9-49bb-8bee-78ef4fcdfdfe"
                },
                new IdentityRole
                {
                    Id = "a3d22972-eec3-49bf-96b8-41b84c197870",
                    Name = "Editor",
                    NormalizedName = "EDITOR",
                    ConcurrencyStamp = "8d680de3-85ad-4a22-8cc7-4366c896f114"
                }
            );
        }
    }
}
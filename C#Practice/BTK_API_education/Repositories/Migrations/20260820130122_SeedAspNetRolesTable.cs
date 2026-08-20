using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Repositories.Migrations
{
    /// <inheritdoc />
    public partial class SeedAspNetRolesTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "66bf4077-c8fd-4aca-a084-22f3c57ce281", "6c020ea2-d1e9-49bb-8bee-78ef4fcdfdfe", "User", "USER" },
                    { "a3d22972-eec3-49bf-96b8-41b84c197870", "8d680de3-85ad-4a22-8cc7-4366c896f114", "Editor", "EDITOR" },
                    { "cadee4c9-14eb-4370-9c09-0f730e77cfee", "d92997ad-9c79-41d4-a9a9-28e6c7dee1ec", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "66bf4077-c8fd-4aca-a084-22f3c57ce281");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a3d22972-eec3-49bf-96b8-41b84c197870");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cadee4c9-14eb-4370-9c09-0f730e77cfee");
        }
    }
}

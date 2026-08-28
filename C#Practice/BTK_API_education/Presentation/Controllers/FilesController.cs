using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/files")]
    public class FilesController : ControllerBase
    {
        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            // media directory
            var mediaDirectory = Path.Combine(Directory.GetCurrentDirectory(), "Media");
            if (!Directory.Exists(mediaDirectory))
            {
                Directory.CreateDirectory(mediaDirectory);
            }

            // file path
            var filePath = Path.Combine(mediaDirectory, file.FileName);

            // stream
            using (var stream = new FileStream(filePath, FileMode.Create)) // Create a new file or overwrite if it exists
            {
                await file.CopyToAsync(stream);
            }

            // response
            return Ok(new 
            { 
                file = file.FileName,
                path = filePath,
                length = file.Length 
            });
        }
    
        [HttpGet("download")]
        public async Task<IActionResult> DownloadFile(string fileName)
        {
            var mediaDirectory = Path.Combine(Directory.GetCurrentDirectory(), "Media");
            var filePath = Path.Combine(mediaDirectory, fileName);

            // content type
            var provider = new FileExtensionContentTypeProvider();
            if (!provider.TryGetContentType(filePath, out var contentType))
            {
                contentType = "application/octet-stream";
            }

            // read
            var bytes = await System.IO.File.ReadAllBytesAsync(filePath);
            return File(bytes, contentType, Path.GetFileName(filePath));
        }
    }
}
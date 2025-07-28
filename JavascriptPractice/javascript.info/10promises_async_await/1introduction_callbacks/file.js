"use strict";

function LoadScript(src, callback)
{
    // Create a script element
    // Set its src attribute to the provided URL
    let script = document.createElement('script');
    script.src = src;

    // Set the onload handler to call the callback with no error when the script loads successfully
    script.onload = () => callback(null, script);

    // Set an error handler to call the callback with an error if the script fails to load
    script.onerror = () => callback(new Error("Failed to load script: " + src));

    document.head.append(script);
}

// load the script and call the callback when it's loaded
LoadScript('helloScript.js', function(error, script)  {
    
    // error is falsy (null) onload, but truthy (Error object) on error
    if (error)
    {
        console.error(error);
        return;
    }

    // script is the script element that was loaded
    // You can now use the functions defined in the script
    console.log("Script loaded: " + script.src);
    alert(GetReallyImportantValue());
});

// alert(GetReallyImportantValue()); // This will not work because the script is not loaded yet
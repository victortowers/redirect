// Precomputed HTML response for maximum performance
const HTML_RESPONSE = `<!DOCTYPE html>
<html>
<head><title>Domain Caller</title></head>
<body>
  <img src="https://a.vtinc.com/pixel.gif" style="display:none">
  <img src="https://b.vtinc.com/pixel.gif" style="display:none">
  <script>
    fetch('https://a.vtinc.com');
    fetch('https://b.vtinc.com');
  </script>
</body>
</html>`;

export default async function handler(request) {
  const url = new URL(request.url);
  
  if (url.pathname === '/') {
    return new Response(HTML_RESPONSE, {
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
      },
      status: 200
    });
  }

  return new Response('Not Found', { status: 404 });
}


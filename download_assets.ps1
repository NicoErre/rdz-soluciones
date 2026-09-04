[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -bor [Net.SecurityProtocolType]::Tls13

$targets = @(
  @{
    File = "C:\Users\PC\.gemini\antigravity\scratch\rdz-soluciones\assets\caba-consorcios.jpg"
    Url  = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Buenos_Aires_-_Recoleta_-_200801a.jpg"
  },
  @{
    File = "C:\Users\PC\.gemini\antigravity\scratch\rdz-soluciones\assets\caba-palermo.jpg"
    Url  = "https://upload.wikimedia.org/wikipedia/commons/b/b3/Palermo_viejo_buenos_aires.jpg"
  },
  @{
    File = "C:\Users\PC\.gemini\antigravity\scratch\rdz-soluciones\assets\caba-caballito.jpg"
    Url  = "https://upload.wikimedia.org/wikipedia/commons/7/77/Buenos_Aires_-_Caballito_-_Avenida_Rivadavia.jpg"
  },
  @{
    File = "C:\Users\PC\.gemini\antigravity\scratch\rdz-soluciones\assets\caba-avenida.jpg"
    Url  = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Avenida_de_Mayo_Buenos_Aires.jpg"
  }
)

foreach ($item in $targets) {
  try {
    $wc = New-Object System.Net.WebClient
    $wc.Headers.Add("User-Agent", "RDZSolucionesSite/1.0 (contact: info@rdzsoluciones.com.ar)")
    $wc.DownloadFile($item.Url, $item.File)
    $size = (Get-Item $item.File).Length
    Write-Host "OK: $($item.File) - $size bytes"
  } catch {
    Write-Host "ERROR: $($item.Url) - $($_.Exception.Message)"
  }
}

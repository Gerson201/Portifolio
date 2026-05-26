$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$jar = Join-Path $PSScriptRoot "plantuml.jar"
$input = Join-Path $root "public\Projetos Engenharia de Software\Plantuml"

if (!(Test-Path $jar)) {
  Write-Error "plantuml.jar não encontrado em $jar"
}

if (!(Test-Path $input)) {
  Write-Error "Diretório Plantuml não encontrado: $input"
}

Get-ChildItem -Path $input -Recurse -Filter *.puml | ForEach-Object {
  $dir = $_.Directory.FullName
  & java -jar $jar -tsvg -output $dir $_.FullName | Out-Null
}

Write-Host "PlantUML renderizado para SVG."

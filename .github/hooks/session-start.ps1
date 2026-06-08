$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$configPath = Join-Path $scriptDir 'config.json'

if (-not (Test-Path $configPath)) {
  Write-Host ''
  Write-Host '==============================================='
  Write-Host '  SESSION START'
  Write-Host '==============================================='
  Write-Host ''
  Write-Host '  WARN: .claude/hooks/config.json not found.'
  Write-Host '  Copy config.json from the hooks template and customize for this project.'
  Write-Host ''
  Write-Host '==============================================='
  Write-Host ''
  exit 0
}

$config = Get-Content $configPath -Raw | ConvertFrom-Json
$projectName = if ($config.project_name) { $config.project_name } else { 'Unnamed Project' }
$notes = @($config.session_start.custom_notes)

Write-Host ''
Write-Host '==============================================='
Write-Host ('  SESSION START - ' + $projectName)
Write-Host '==============================================='
Write-Host ''

if ($notes.Count -gt 0) {
  Write-Host '  Project notes:'
  foreach ($note in $notes) {
    Write-Host ('  - ' + $note)
  }
  Write-Host ''
}

Write-Host '  Hooks active:'
Write-Host '  - dep-guard warning on Bash installs'
Write-Host '  - script-guard validation on npm run commands'
Write-Host '  - empty-test guard on test file writes'
Write-Host ''
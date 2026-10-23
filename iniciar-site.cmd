@echo off
cd /d "%~dp0"
if not exist ".tmp" mkdir ".tmp"
set "TEMP=%CD%\.tmp"
set "TMP=%CD%\.tmp"
set "NEXT_TELEMETRY_DISABLED=1"
echo Site local: http://127.0.0.1:3000
echo Para encerrar, pressione Ctrl+C.
call npm.cmd run dev
pause

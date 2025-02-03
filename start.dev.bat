@echo off

rem Caminhos dos diretórios
set BACKEND_PATH=%~dp0api
set FRONTEND_PATH=%~dp0frontend

rem Função para instalar dependências
call :install_dependencies "%BACKEND_PATH%"
call :install_dependencies "%FRONTEND_PATH%"

rem Inicia o backend e o frontend
start cmd.exe /k "cd /d %BACKEND_PATH% && npm run start:dev"
start cmd.exe /k "cd /d %FRONTEND_PATH% && npm run dev"

exit /b

:install_dependencies
set PATH_TO=%~1
if not exist "%PATH_TO%\node_modules" (
    echo Instalando dependências em %PATH_TO%...
    if exist "%PATH_TO%\package.json" (
        cd /d "%PATH_TO%"
        npm install
    ) else (
        echo Erro: package.json não encontrado em %PATH_TO%.
    )
)
exit /b

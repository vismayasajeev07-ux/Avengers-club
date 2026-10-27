@echo off
title Avengers Club - Push to GitHub
echo ====================================================
echo  [S.H.I.E.L.D. PROTOCOL] PUSH TO GITHUB REPOSITORY
echo  Target: https://github.com/vismayasajeev07-ux/Avengers-club.git
echo ====================================================
echo.

set GIT_EXE=.\.git-bin\cmd\git.exe

if not exist "%GIT_EXE%" (
    echo [ERROR] Git executable not found in .git-bin
    pause
    exit /b 1
)

echo Pushing branch 'main' to origin...
echo (When prompted, enter your GitHub Username and Personal Access Token)
echo.

"%GIT_EXE%" push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ====================================================
    echo  [SUCCESS] All code uploaded to GitHub successfully!
    echo  View at: https://github.com/vismayasajeev07-ux/Avengers-club
    echo ====================================================
) else (
    echo.
    echo [ERROR] Push failed. Please check your credentials or token.
)

echo.
pause

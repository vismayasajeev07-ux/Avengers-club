@echo off
set GIT_EXE=.\.git-bin\cmd\git.exe
"%GIT_EXE%" init
"%GIT_EXE%" config user.name "vismayasajeev07-ux"
"%GIT_EXE%" config user.email "vismayasajeev07@users.noreply.github.com"
"%GIT_EXE%" branch -M main
"%GIT_EXE%" remote remove origin 2>nul
"%GIT_EXE%" remote add origin https://github.com/vismayasajeev07-ux/Avengers-club.git
"%GIT_EXE%" add .
"%GIT_EXE%" status
"%GIT_EXE%" commit -m "Initial commit: Avengers Club college recruitment website"

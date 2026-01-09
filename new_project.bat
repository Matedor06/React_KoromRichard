@echo off
title Projekt Létrehozása
pushd "%~dp0"

:begin
set /p selection="Adj meg egy nevet "
@REM set commit=
@REM set /p commit="Commit esetén commit message > "


npm create vite@latest %selection% -- --template react-ts

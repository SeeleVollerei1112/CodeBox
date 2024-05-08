#include <windows.h>
 int main()
 {
 char command[] = "notepad.exe";
 STARTUPINFO si = { sizeof(si) };
 PROCESS_INFORMATION pi;
 BOOL ret;
 si.dwFlags = STARTF_USESHOWWINDOW;
 si.wShowWindow = TRUE;
 ret = CreateProcess(NULL, command, NULL, NULL, FALSE, CREATE_NEW_CONSOLE,
 NULL, NULL, &si, &pi);
 if (ret)
 {
 Sleep(3000);
 TerminateProcess(pi.hProcess, 0);
 CloseHandle(pi.hThread);
CloseHandle(pi.hProcess);
 }
 return 0;
 }
#include<iostream>

#include<iostream>
int main()
{
    using namespace std;
    int auks,bats,coots;
    auks = 1.99 + 11.99;
    cout << "auks = " << auks << endl;

    return 0;
}

// 将键绑定放在此文件中以覆盖默认值
[
  {
    "key": "alt+i",
    "command": "cursorUp",
    "when": "textInputFocus"
  },
  {
    "key": "up",
    "command": "cursorUp",
    "when": "textInputFocus"
  },
  {
    "key": "alt+i",
    "command": "selectPrevSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "up",
    "command": "selectPrevSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "alt+k",
    "command": "cursorDown",
    "when": "textInputFocus"
  },
  {
    "key": "down",
    "command": "cursorDown",
    "when": "textInputFocus"
  },
  {
    "key": "alt+k",
    "command": "selectNextSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "down",
    "command": "-selectNextSuggestion",
    "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "alt+l",
    "command": "cursorRight",
    "when": "textInputFocus"
  },
  {
    "key": "right",
    "command": "cursorRight",
    "when": "textInputFocus"
  },
  {
    "key": "alt+j",
    "command": "cursorLeft",
    "when": "textInputFocus"
  },
  {
    "key": "left",
    "command": "cursorLeft",
    "when": "textInputFocus"
  },
  {
    "key": "home",
    "command": "cursorHome",
    "when": "textInputFocus"
  },
  {
	"key": "escape",
	"command": "toggleVim",
	"when": "editorTextFocus && vim.mode == 'Disabled' || editorTextFocus && vim.mode == 'Normal'"
  },  
]

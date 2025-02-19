// Copyright Splunk
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

class MainView extends View {

  constructor(document, sb) {
    super(document.body);
    document.documentElement.style.height = '100%';
    this.addClass('MainView');
    this.setBackgoundColor(sb.darkBgColor);
    this.setColor(sb.textColor);
    this.setMargin(0);
    this.setDisplay('flex');
    this.setHeight('100%');
    this.setFontFamily('sans-serif');
  }

}

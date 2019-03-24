## 属性选择器
 /* 完全匹配 */
  /* li[class="list-3-item"] {
    color: red;
  } */

  /* 部分 */
  /* ^ */
  /* li[class^="list"] {
    color: red;
  } */

  /* $ */
  /* li[class$="2-item"] {
    color: red;
  } */

  /* * */
  [class*="-3-"] {
    color: red;
  }

  <li class="list-1-item">1</li>
  <li class="list-2-item">2</li>
  <li class="list-3-item">3</li>
  <p class="list-3-item">4</p>

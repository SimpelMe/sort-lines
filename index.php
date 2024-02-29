<!doctype html>
<html dir="ltr" lang="en-US">

<head>
  <?php include dirname($_SERVER['DOCUMENT_ROOT']) . "/simpel.cc/php/head.php"; ?>
  <link rel="stylesheet" href="style.min.css">
</head>

<body onKeyDown="keys(event,'d')" onKeyUp="keys(event,'u')">
  <header>
    <?php include dirname($_SERVER['DOCUMENT_ROOT']) . "/simpel.cc/php/header.php"; ?>
  </header>
  <main>
    <noscript>
      <b>Warning: JavaScript had to be enabled.</b>
      <br><br>
    </noscript>
    <details>
      <summary>How to sort</summary>
      <p>With this tool you can sort newline separated lines alphabetically.</p>
      <p>You can either push the button "Paste, Sort &amp; Copy" where the clipboard content is used as content or fill in your lines into textarea and push the button "Sort &amp; Copy". In both cases the sorted result will be put back to clipboard.
      </p>
      <p>If you set the option "output unique lines only" all lines existing more then once are deleted.</p>
    </details>
    <div class="flex">
      <button type="button" class="button pastesortunique" title="click: paste + sort + unique + copy to clipboard" onclick="paste()">Paste, Sort &amp; Copy [1]</button>
      <span class="between_buttons">or</span>
      <button type="button" class="button sortunique" title="click: sort + unique + copy to clipboard" onclick="sort_and_copy()">Sort &amp; Copy [2]</button>
      <div class="flexlabel">
        <input id="unique" type="checkbox" name="unique" checked>
        <label for="unique">output unique lines only</label>
      </div>
    </div>
    <label for="textarea">Lines to sort or already sorted:</label>
    <textarea id="textarea" autofocus placeholder="fill in lines to sort here …" spellcheck="false" autocomplete="off"></textarea>
  </main>
</body>
<script src="script.min.js"></script>

</html>

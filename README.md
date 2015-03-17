Basic use:

```html
  <figure class="image clickable" data-toggle="modal" data-target="#modal-{{_id}}">
    <div class="image-container">
      <img src="{{url}}">
    </div>
    <footer class="title">
      {{title}}
    </footer>
  </figure>

<!-- Modal -->
<template name="modal">
  <div class="modal fade" id="modal-{{_id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        {{> UI.contentBlock}}
      </div>
    </div>
  </div>
</template>
```

Basic use:

```html
<figure class="image clickable" data-toggle="modal" data-target="#modal{{id}}">
  <div class="image-container">
    <img src="{{url}}">
  </div>
  <footer class="description">
    {{title}}
  </footer>
</figure>

<!-- Modal -->
<div class="modal fade" id="modal{{id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <figure class="image" data-toggle="modal" data-target="#modal{{id}}">
        <div class="image-container">
          <img src="{{url}}">
        </div>
        <footer class="description">
          {{title}}
        </footer>
      </figure>
    </div>
  </div>
</div>
```
<script>
    export let stream;
    export let local = false;

    function srcObject(node, stream) {
      node.srcObject = stream;
      return {
        update(newStream) {
          if (node.srcObject != newStream) {
            node.srcObject = newStream
          }
        }
      }
    }
</script>

<video use:srcObject={stream} autoplay playsinline muted={local}></video>

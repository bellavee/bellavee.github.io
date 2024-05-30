<script>
    export let image = { url: '', alt: '' };
</script>

<style>
    .aspect-ratio {
      position: relative;
      width: 100%; /* Adjust width as needed */
      overflow: hidden;
    }
  
    .aspect-ratio {
      padding-top: 30%;
      margin-bottom: 120px;
    }

    @media (max-width: 768px) {
      .aspect-ratio {
        padding-top: 40%; 
        margin-bottom: 70px;
      }
    }
  
    .aspect-ratio img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
</style>

<div class="aspect-ratio">
    <img src={image.url} alt={image.alt} />
</div>
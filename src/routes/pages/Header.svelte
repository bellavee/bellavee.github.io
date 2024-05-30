<script>
    import img_background from '$lib/assets/bg_xl.jpg'
</script>

<style>
    .aspect-ratio {
      position: relative;
      width: 100%; /* Adjust width as needed */
      padding-top: 30%; /* 100 * 9 / 21 */
      overflow: hidden;
      margin-bottom: 120px;
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
    <img src="{img_background}" alt="Background" />
</div>
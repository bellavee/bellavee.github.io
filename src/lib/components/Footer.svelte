<script>
    import { Github, Linkedin } from 'lucide-svelte';
    let currentYear = new Date().getFullYear();
</script>

<footer class="text-navy-200 py-6 mt-6">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-center">
            <p class="mb-4 sm:mb-0 text-xs">&copy; {currentYear} Bella Vũ. All rights reserved.</p>
            <div class="flex space-x-4">
                <a href="https://github.com/bellavee" target="_blank" rel="noopener noreferrer" class="text-navy-200 hover:text-tsusaka transition-colors duration-300">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/bella-vee" target="_blank" rel="noopener noreferrer" class="text-navy-200 hover:text-tsusaka transition-colors duration-300">
                    <Linkedin size={20} />
                </a>
            </div>
        </div>
    </div>
</footer>
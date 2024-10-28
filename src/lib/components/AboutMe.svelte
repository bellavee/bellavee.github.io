<script>
    import {Code, Gamepad2, Github, Globe, Linkedin, Sparkles} from "lucide-svelte";
</script>            

<!-- About Me Card -->
<div class="bg-navy-900/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 border-honami/50">
    <h2 class="text-2xl font-bold mb-6 text-navy-100 flex items-center gap-2">
        <Sparkles class="h-6 w-6 text-honami" />
        About Me
    </h2>
    <p class="text-navy-300 mb-6">
        I'm a passionate developer with experience in web development, and game creation. My expertise includes:
    </p>
    <ul class="space-y-4 text-navy-300 mb-8">
        <li class="flex items-center p-3 rounded-lg bg-navy-800/30 border border-navy-700/50">
            <Globe class="mr-3 h-5 w-5 text-honami" /> Web Development
        </li>
        <li class="flex items-center p-3 rounded-lg bg-navy-800/30 border border-navy-700/50">
            <Gamepad2 class="mr-3 h-5 w-5 text-honami" /> Game Creation
        </li>
        <li class="flex items-center p-3 rounded-lg bg-navy-800/30 border border-navy-700/50">
            <Code class="mr-3 h-5 w-5 text-honami" /> UI/UX Design
        </li>
    </ul>

    <p class="text-navy-300 mb-6 text-center">
        Let's connect! Find me on these platforms:
    </p>

    <div class="flex justify-center gap-6">
        <a href="https://github.com/bellavee" target="_blank" rel="noopener noreferrer"
           class="p-3 rounded-lg bg-navy-800/30 text-navy-300 hover:text-honami border border-navy-700/50 hover:border-honami/30 transition-all duration-300">
            <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/bella-vee" target="_blank" rel="noopener noreferrer"
           class="p-3 rounded-lg bg-navy-800/30 text-navy-300 hover:text-honami border border-navy-700/50 hover:border-honami/30 transition-all duration-300">
            <Linkedin size={24} />
        </a>
    </div>
</div>
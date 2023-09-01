<script>
    import { onMount } from "svelte";

    let LottiePlayer;

    onMount(async () => {
        const module = await import("@lottiefiles/svelte-lottie-player");
        LottiePlayer = module.LottiePlayer;
    });

    let controlsLayout = [
        "previousFrame",
        "playpause",
        "stop",
        "nextFrame",
        "progress",
        "frame",
        "loop",
        "spacer",
        "background",
        "snapshot",
        "zoom",
        "info",
    ];
</script>

<div class="w-full h-screen flex items-center justify-center">
    {#if LottiePlayer}
        <LottiePlayer
            src="https://lottie.host/112a2d9a-27de-4ace-91f8-d179581454f2/oJ5CPFCn7e.json"
            autoplay={true}
            loop={true}
            controls={false}
            renderer="svg"
            background="transparent"
            height={600}
            width={600}
            {controlsLayout}
        />
    {/if}
</div>

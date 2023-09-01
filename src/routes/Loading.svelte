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
            src="https://lottie.host/25d804b4-f40e-44ba-ae82-29c7ceb228b7/ya9XmxqFqX.json"
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

<script>
	import "./styles.css";
	
</script>

<div class="w-screen h-screen grid grid-cols-1 md:grid-cols-2">
    <div class="grid grid-rows-4 lg:grid-rows-6">
        <div class=" grid lg:grid-cols-6 row-span-3 lg:row-span-5">
            <div class=" grid lg:grid-rows-4 lg:col-span-2">
                <div class="bg-blue-400 lg:row-span-2">1</div>
                <div class="bg-teal-400 lg:row-span-2">2</div>
            </div>
            <div class="bg-rose-400 lg:col-span-4">3</div>
        </div>
        <div class="bg-fuchsia-400 row-span-1 lg:row-span-1">4</div>
    </div>
    <div class="grid grid-rows-3 lg:grid-rows-6">
        <div class="bg-amber-300 row-span-1 lg:row-span-2">5</div>
        <div class="grid grid-cols-1 md:grid-cols-2 row-span-2 lg:row-span-4">
            <div class="flex items-center justify-center bg-yellow-100">
                <div
                    class="flex items-center justify-center w-40 h-40 bg-slate-900"
                >
                    <div
                        id="mountain"
                        class="rounded-full w-28 h-28 bg-yellow-100"
                    />
                </div>
            </div>
            <div class="bg-emerald-400">7</div>
        </div>
    </div>
</div>

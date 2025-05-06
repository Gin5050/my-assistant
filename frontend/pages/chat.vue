<script setup lang="ts">
import { ref } from 'vue'

const messages = ref([
    { role: 'assistant', content: 'こんにちは！何かお手伝いできますか？' }
])
const input = ref('')

function sendMessage() {
    if (!input.value.trim()) return
    messages.value.push({ role: 'user', content: input.value })
    // 仮のAI応答（API連携はcomposablesで実装予定）
    setTimeout(() => {
        messages.value.push({ role: 'assistant', content: '（AIの応答例）' })
    }, 500)
    input.value = ''
}
</script>

<template>
    <div class="flex flex-col h-screen bg-gray-50">
        <header class="p-4 bg-white shadow text-xl font-bold">AIチャット</header>
        <main class="flex-1 overflow-y-auto p-4 space-y-4">
            <div v-for="(msg, idx) in messages" :key="idx" :class="msg.role === 'user' ? 'text-right' : 'text-left'">
                <div :class="msg.role === 'user' ? 'inline-block bg-blue-100 text-blue-900' : 'inline-block bg-gray-200 text-gray-800'"
                    class="rounded px-4 py-2 max-w-xl">
                    {{ msg.content }}
                </div>
            </div>
        </main>
        <form @submit.prevent="sendMessage" class="p-4 bg-white flex gap-2 border-t">
            <input v-model="input" type="text" class="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
                placeholder="メッセージを入力..." autocomplete="off" />
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">送信</button>
        </form>
    </div>
</template>

<style scoped>
main {
    scrollbar-width: thin;
}
</style>

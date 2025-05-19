<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import { useRouter } from 'vue-router'
import { columns } from '@/components/events/components/columns'
import DataTable from '@/components/events/components/DataTable.vue'

const events = ref([])

async function fetchEvents() {
  try {
    const response = await fetch('/api/events')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    events.value = await response.json()
  }
  catch (error) {
    console.error('Error fetching events:', error)
  }
}

onMounted(async () => {
  await fetchEvents()
})
</script>

<template>
  <div class="w-full flex flex-col items-stretch gap-4">
    <div class="flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Tasks
        </h2>
        <p class="text-muted-foreground">
          Here&apos;s a list of your events!
        </p>
      </div>
    </div>
    <DataTable :data="events" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import { useRouter } from 'vue-router'
import { columns } from '@/components/organizations/components/columns'
import DataTable from '@/components/organizations/components/DataTable.vue'

const tasks = ref([])
// const columns = ref([
//   { name: 'Task', key: 'task' },
//   { name: 'Status', key: 'status' },
//   { name: 'Due Date', key: 'dueDate' },
// ]);

async function fetchTasks() {
  try {
    const response = await fetch('/api/tasks')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    tasks.value = await response.json()
  }
  catch (error) {
    console.error('Error fetching tasks:', error)
  }
}

onMounted(async () => {
  await fetchTasks()
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
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>
    </div>
    <DataTable :data="tasks" :columns="columns" />
  </div>
</template>

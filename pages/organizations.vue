<script setup lang="ts">
import type { Organization } from '@/types/index'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import { columns } from '@/components/organizations/components/columns'
import DataTable from '@/components/organizations/components/DataTable.vue'
import { useApiFetch } from '@/composables/useApiFetch'

const organizations = ref<Organization[]>([])

async function fetchOrganizations() {
  try {
    const { data, error } = await useApiFetch<Organization[]>('/organizations')
    console.error('Error:', error)
    if (error.value) {
      throw error.value
    }
    organizations.value = data.value || []
    // console.warn('Organizations:', organizations.value)
  }
  catch (error) {
    console.error('Error fetching organizations:', error)
  }
}

// onMounted(async () => {
//   await fetchOrganizations()
// })
</script>

<template>
  <div class="w-full flex flex-col items-stretch gap-4">
    <div class="flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Organizations
        </h2>
        <p class="text-muted-foreground">
          Here&apos;s a list of your organizations!
        </p>
      </div>
    </div>
    <DataTable :data="organizations" :columns="columns" />
  </div>
</template>

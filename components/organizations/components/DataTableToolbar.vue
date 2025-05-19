<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import type { Organization } from '../data/schema'
import { computed, ref } from 'vue'
import DataTableViewOptions from './DataTableViewOptions.vue'

interface DataTableToolbarProps {
  table: Table<Organization>
}

const props = defineProps<DataTableToolbarProps>()

const organization = ref({
  name: '',
  slug: '',
})

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input
        placeholder="Filter organizations..."
        :model-value="(table.getColumn('name')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]"
        @input="table.getColumn('name')?.setFilterValue($event.target.value)"
      />
      <!-- <Button
        variant="outline"
        class="h-8 px-2 lg:px-3"
        @click="modal = true"
      >
        Create Organization
      </Button> -->
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">
            Create Organization
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Organization</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new organization.
            </DialogDescription>
          </DialogHeader>
          <div class="flex flex-col py-4 space-y-4">
            <div class="flex flex-col space-y-2">
              <Label for="name" class="text-left">
                Name
              </Label>
              <Input id="name" v-model="organization.name" placeholder="Company A" />
            </div>
            <div class="flex flex-col space-y-2">
              <Label for="slug" class="text-left">
                Slug
              </Label>
              <Input id="slug" v-model="organization.slug" placeholder="company-a" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
        @click="table.resetColumnFilters()"
      >
        Reset
        <Icon name="i-radix-icons-cross-2" class="ml-2 h-4 w-4" />
      </Button>
    </div>
    <DataTableViewOptions :table="table" />
  </div>
</template>

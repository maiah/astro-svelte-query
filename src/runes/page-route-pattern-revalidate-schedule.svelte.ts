export let revalidationSchedules = $state<Record<string, Date>>({})

export function setRouteRevalidationSchedule(routePattern: string, schedule: Date) {
  revalidationSchedules[routePattern] = schedule
}

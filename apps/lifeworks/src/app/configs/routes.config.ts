export const ApplicationRoutes = [
    {
        path: '',
        loadChildren: '@lifeworks/activity-log#ActivityLogModule'
    },
    {
        path: 'notifications',
        loadChildren: '@lifeworks/notifications#NotificationsModule'
    }
]
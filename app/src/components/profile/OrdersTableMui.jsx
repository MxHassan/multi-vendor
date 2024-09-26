import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { ordersPageColumns } from '../../static/data'
import { selectCurrentTheme } from '../../features/theme/themeSlice'
import { useSelector } from 'react-redux'

const paginationModel = { page: 0, pageSize: 5 }
const OrdersTableMui = ({ rows }) => {
  const theme = useSelector(selectCurrentTheme)
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={ordersPageColumns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0
        }}
      />
    </Paper>
  )
}
export default OrdersTableMui

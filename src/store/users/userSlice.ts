import { UserList } from 'store/users/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: UserList = {
	users: {
		active: [],
		archive: []
	}
}

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state: UserList, { payload }) => {
			state.users.active = payload
		},
		toggleArchiveUser: (state: UserList, { payload }) => {
			if (state.users.active.find(user => user.id === payload.id)) {
				state.users.archive.push(payload)
				state.users.active = state.users.active.filter(
					user => user.id !== payload.id
				)
			} else {
				state.users.active.push(payload)
				state.users.archive = state.users.archive.filter(
					user => user.id !== payload.id
				)
			}
		},
		removeUser: (state: UserList, { payload }) => {
			state.users.active = state.users.active.filter(
				user => user.id !== payload
			)
		},
		changeUserProfile: (state: UserList, { payload }) => {
			const user = state.users.active.find(u => u.id === payload.id)
			const changedUser = { ...user, ...payload }
			state.users.active = state.users.active.filter(u => u.id !== payload.id)
			state.users.active.push(changedUser)
			console.log(user, payload)
		},
		clearUsers: () => initialState
	}
})

export const {
	setUsers,
	toggleArchiveUser,
	removeUser,
	changeUserProfile,
	clearUsers
} = userSlice.actions
export default userSlice.reducer

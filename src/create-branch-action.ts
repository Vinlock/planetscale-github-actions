import { getOptionalInput, getRequiredInput, output, wrapRunner } from './action-utils'
import { createBranch } from './planetscale'

const run = async () => {
	const apiKey = getRequiredInput('api_key')
	const organization = getRequiredInput('organization')
	const database = getRequiredInput('database')
	const name = getRequiredInput('name')
	const parentBranch = getRequiredInput('parent_branch')
	const backupId = getOptionalInput('backup_id')

	const createdBranchName = await createBranch({
		apiKey,
		organization,
		database,
		name,
		parentBranch,
		backupId,
	})

	output('name', createdBranchName)
}

void wrapRunner('create-branch', run())

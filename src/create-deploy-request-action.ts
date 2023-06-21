import { getOptionalInput, getRequiredInput, wrapRunner } from './action-utils'
import { createDeployRequest } from './planetscale'

const run = async () => {
	const apiKey = getRequiredInput('api_key')
	const organization = getRequiredInput('organization')
	const database = getRequiredInput('database')
	const branch = getRequiredInput('branch')
	const intoBranch = getRequiredInput('into_branch')
	const notes = getOptionalInput('notes')

	await createDeployRequest({
		apiKey,
		organization,
		database,
		branch,
		intoBranch,
		notes,
	})
}

void wrapRunner('create-deploy-request', run())

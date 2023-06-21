import axios from 'axios'

const api = (apiKey: string) => {
	return axios.create({
		baseURL: 'https://api.planetscale.com/v1',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
}

export const createBranch = async ({
	apiKey,
	organization,
	database,
	name,
	parentBranch,
	backupId,
}: {
	apiKey: string
  organization: string
  database: string
  name: string
  parentBranch: string
  backupId?: string
}) => {
	const sanitizedBranchName = cleanBranchName(name)

	await api(apiKey).post(`/organizations/${organization}/databases/${database}/branches`, {
		name: sanitizedBranchName,
		parent_branch: parentBranch,
		backup_id: backupId,
	})

	return sanitizedBranchName
}

export const cleanBranchName = (name: string) => {
	return name
		.replace(/[\W_]+/g, '_')
		.replace(/_$/, '')
		.replace(/^_/, '')
}

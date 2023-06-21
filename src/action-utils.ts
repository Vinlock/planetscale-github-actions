import { getInput, setFailed, setOutput } from '@actions/core'

export const getRequiredInput = (name: string) => {
	return getInput(name, { required: true })
}

export const getOptionalInput = (name: string) => {
	const value = getInput(name)

	return value.length > 0 ? value : undefined
}

export const wrapError = (error: unknown) => {
	return error instanceof Error ? error : new Error(String(error))
}

export const wrapRunner = async <T extends Promise<unknown>>(name: string, run: T) => {
	try {
		await run
	} catch (error) {
		setFailed(`${name} action failed: ${wrapError(error)}`)
	}
}

export const output = (key: string, value: string) => {
	setOutput(key, value)
}

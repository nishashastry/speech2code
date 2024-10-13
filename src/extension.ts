// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import axios from 'axios';

import { AssemblyAI } from 'assemblyai';
import { CodeRunner } from './coderunner';

// AssemblyAI configuration
const client = new AssemblyAI({
  	apiKey: 'a8f8800503f64f2cb716dd36b090f909'
});

const audioFile = 'https://assembly.ai/nbc.mp3';

const params = {
	audio: audioFile,
	speaker_labels: true
};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "speech2code" is now active!');
	const disposable = vscode.commands.registerCommand('speech2code.runExtension', async () => {
		vscode.window.showInformationMessage('Hello World from speech2code!');
		await runExtension();
	});
	context.subscriptions.push(disposable);
}

// Runs extension from transcribing audio to running generated code
const runExtension = async () => {
	// Transcribe audio file into text
	// const command = transcribeTextFromAudio();

	// const fileName = await generateFileName(command);
	const fileName = 'test.js';

	// Create new file
	await createNewFile(fileName);

	// Test using static text to refrain from using transcribe credits
	const code = await generateCodeFromCommand('Create a JSON file that logs a random date in the console');
	console.log(code);
	const editor = vscode.window.activeTextEditor;

	if (editor && typeof code === 'string') {
		const position = editor.selection.active; // Current cursor position
		const text: string = code;
		editor.edit(editBuilder => {
		editBuilder.insert(position, text); // Insert text at cursor position
		});
	}

	// Run generated code
	await runCode();
}

// Runs transcription
async function transcribeTextFromAudio(): Promise<any> {
	const transcript = await client.transcripts.transcribe(params);

	if (transcript.status === 'error') {
		console.error(`Transcription failed: ${transcript.error}`);
		process.exit(1);
	}

	console.log(transcript.text);
	return transcript.text;
}

// Creates and opens new file
async function createNewFile(fileName: string) {
	// TODO: change hard-coded file location
	const filePath = vscode.Uri.file(path.join('Users/jeewonj/cs/dubhacks24/speech2code/', fileName));

	try {
		// Write the content to the file
		await vscode.workspace.fs.writeFile(filePath, Buffer.from("", 'utf8'));
		vscode.window.showInformationMessage(`File created: ${filePath}`);

		// Open the new file
		const document = await vscode.workspace.openTextDocument(filePath);
		await vscode.window.showTextDocument(document);
	} catch (error) {
		console.error('Error creating file:', error);
		vscode.window.showErrorMessage(`Failed to create file: ${error.message}`);
	}
}

// Generates code from parsed audio input using Gemini API
async function generateCodeFromCommand(command: any): Promise<any> {
	try {
		// Send POST request to Flask server with command in JSON body
		const response = await axios.post('http://127.0.0.1:5000/generate_code_from_command', {
			command: command
		});

		// Get the code text from the response
		const codeText = response.data.message;
		console.log(codeText);

		if (typeof codeText !== 'string') {
			return 'Error';
		}
		return codeText;
	} catch (error) {
		console.error('Error generating code:', error);
		vscode.window.showErrorMessage('Failed to generate code. Please try again.');
	}
}

// Saves and runs generated code
const runCode = async () => {
	const codeRunner = new CodeRunner();

	// Saves all generated files
	await vscode.workspace.saveAll();

	// Run code
	codeRunner.run();
}

// This method is called when your extension is deactivated
export function deactivate() {}

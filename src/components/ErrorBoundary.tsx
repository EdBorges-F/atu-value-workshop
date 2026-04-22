import { Component, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; error?: Error }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  handleClear = () => {
    localStorage.removeItem('frontier-canvas-session')
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
          <div className="max-w-md text-center space-y-4">
            <span className="text-4xl">⚠️</span>
            <h1 className="text-xl font-bold text-gray-900">Something went wrong</h1>
            <p className="text-sm text-gray-600">
              Frontier Canvas encountered an unexpected error. Your session data is still saved.
            </p>
            {this.state.error && (
              <pre className="text-[10px] text-left bg-gray-100 p-3 rounded-lg overflow-auto max-h-32 text-gray-500">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex gap-3 justify-center pt-2">
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all"
              >
                Try Again
              </button>
              <button
                onClick={this.handleClear}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
              >
                Start Fresh
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

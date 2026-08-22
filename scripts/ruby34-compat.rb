# Local-build shim: the Liquid version pinned by the github-pages gem still
# calls tainted?/untaint, which Ruby >= 3.2 removed; restore them as no-ops.
# Load via: RUBYOPT="-r./scripts/ruby34-compat.rb" bundle exec jekyll serve
# GitHub Pages' own build environment is unaffected (older Ruby, no RUBYOPT).
class Object
  unless method_defined?(:tainted?)
    def tainted?
      false
    end
  end

  unless method_defined?(:untaint)
    def untaint
      self
    end
  end

  unless method_defined?(:taint)
    def taint
      self
    end
  end
end
